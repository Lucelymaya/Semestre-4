from flask import Flask, render_template, redirect, url_for, flash, request
from datetime import datetime
from modelo import db, Producto
from formulario import ProductoForm
from inventario import Inventario

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///inventario.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'dev-secret-key'

db.init_app(app)

@app.context_processor
def inject_now():
    return {'now': datetime.utcnow}

with app.app_context():
    db.create_all()
    inventario = Inventario.cargar_desde_bd()

@app.route('/')
def index():
    return render_template('index.html', title='Inicio')

@app.route('/usuario/<nombre>')
def usuario(nombre):
    return f'Bienvenido, {nombre}!'

@app.route('/about/')
def about():
    return render_template('about.html', title='Acerca de')

# USA lista.html (tu template en español)
@app.route('/productos')
def listar_productos():
    q = request.args.get('q', '').strip()
    productos = inventario.buscar_por_nombre(q) if q else inventario.listar_todos()
    return render_template('lista.html', title='Productos', productos=productos, q=q)

# USA formulario.html (tu template en español)
@app.route('/productos/nuevo', methods=['GET', 'POST'])
def crear_producto():
    form = ProductoForm()
    if form.validate_on_submit():
        try:
            inventario.agregar(
                nombre=form.nombre.data,
                cantidad=form.cantidad.data,
                precio=float(form.precio.data)
            )
            flash('Producto agregado correctamente.', 'success')
            return redirect(url_for('listar_productos'))
        except ValueError as e:
            flash(str(e), 'danger')
    return render_template('formulario.html', title='Nuevo producto', form=form, modo='crear')

# USA formulario.html (tu template en español)
@app.route('/productos/<int:pid>/editar', methods=['GET', 'POST'])
def editar_producto(pid):
    producto = Producto.query.get(pid)
    if not producto:
        flash('Producto no encontrado.', 'danger')
        return redirect(url_for('listar_productos'))
    
    form = ProductoForm(obj=producto)
    
    if form.validate_on_submit():
        try:
            inventario.actualizar(
                id=pid,
                nombre=form.nombre.data,
                cantidad=form.cantidad.data,
                precio=float(form.precio.data)
            )
            flash('Producto actualizado correctamente.', 'success')
            return redirect(url_for('listar_productos'))
        except ValueError as e:
            flash(str(e), 'danger')
    
    return render_template('formulario.html', title='Editar producto', form=form, modo='editar', producto=producto)

@app.route('/productos/<int:pid>/eliminar', methods=['POST'])
def eliminar_producto(pid):
    ok = inventario.eliminar(pid)
    if ok:
        flash('Producto eliminado correctamente.', 'success')
    else:
        flash('Producto no encontrado.', 'warning')
    return redirect(url_for('listar_productos'))

if __name__ == '__main__':
    app.run(debug=True)