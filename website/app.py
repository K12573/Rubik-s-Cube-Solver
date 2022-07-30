from flask import Flask, render_template, url_for, request
import twophase.solver  as sv

app = Flask(__name__)

@app.route('/')


def index():
    return render_template('index.html')


@app.route('/solver')
def solver():
    return render_template('solver.html')

@app.route('/solvingAlgorithm')
def solvingAlgorithm():
    cubeString = request.args.get('cubeString', type=str)
    print(sv.solve(cubeString, 19, 2))
    # print(cubeString)
    # print('Hello World!')
    return render_template('solver.html')


if __name__ == "__main__":
    app.run(debug=True)

