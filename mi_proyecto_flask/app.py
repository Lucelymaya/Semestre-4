from flask import Flask, render_template  # Agregar render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', title='Inicio')  # Cambiado a plantilla

@app.route('/usuario/<nombre>')  # Corrección: <nombre> entre <>
def usuario(nombre):
    return f'Bienvenido, {nombre}!'

@app.route('/about')  # Agregar nueva ruta
def about():
    return render_template('about.html', title='Acerca de')

if __name__ == '__main__':
    app.run(debug=True)