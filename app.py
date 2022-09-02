from flask import Flask, render_template, request, make_response, url_for,jsonify
import random
from chatboot import chatBot as robot
from DB import api
app = Flask(__name__);



@app.route("/")
@app.route("/home")
@app.route("/index")
def index():
    return render_template("home.html");


@app.route("/ajax",methods=['GET', 'POST'])
def ajax():
    if request.method == "GET":
        message = request.args.get("text")
        # print(message)
        if(message !="None"):
            # print()
            # print("Text :", message)
            # print()
            reponse =robot.chat(message)
            # print(robot.chat(message))
        return jsonify({"message":request.args.get("text"),"robot":reponse})

@app.route("/book",methods=['GET', 'POST'])
def book():
    print("true")
    if request.method == "GET":
        name = request.args.get("Name")
        phone = request.args.get("Phone")
        date = request.args.get("Date")
        time = request.args.get("Time")
        person = request.args.get("Person")
        data = [name,phone,date,time,person]
        print(data)
        api.add_sheets(data);
    return jsonify({"message":data});

if __name__ == "__main__":
    app.run(debug=True)