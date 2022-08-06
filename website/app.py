from flask import Flask, render_template, url_for, request
import twophase.solver  as sv

app = Flask(__name__)

@app.route('/')


def index():
    return render_template("index.html")


@app.route('/solver')
def solver():
    return render_template('solver.html')

@app.route('/solvingAlgorithm')
def solvingAlgorithm():
    cubeString = request.args.get('cubeString', type=str)
    output = sv.solve(cubeString, 19, 2)

    return output

@app.route('/timer')
def timer():
    return render_template('timer.html')

if __name__ == "__main__":
    app.run(debug=True)

