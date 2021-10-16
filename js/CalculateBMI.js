//classes
/* a class to caculate BMI, users weight situation
and etc. you can use it everywhere you want*/
class CalculateBMI {
    //constructor
    constructor(height, weight) {
        this.height = height,
        this.weight = weight
    }

    //to check heights amount
    checkHeight() {
        if (this.height <= 300 && this.height >= 30) {
            return true;
        } else {
            return false;
        }
    }

    //to check weights amount
    checkWeight() {
        if (this.weight <= 750 && this.weight >= 3) {
            return true;
        } else {
            return false;
        }
    }

    //to calculate BMI
    calculate() {
        //check if height and weight amount is enough
        if (this.checkHeight() && this.checkWeight()) {
            let BMI = 0;
            BMI = this.weight / (Math.pow(this.height / 100, 2));
            return BMI.toFixed(2);
        } else {
            //return a special error
            try {
                if(this.checkWeight() == false && this.checkHeight() == true){
                    throw "your weight is not in range.";
                }
                if(this.checkWeight() == true && this.checkHeight() == false){
                    throw "your height is not in range.";
                }
                if(this.checkWeight() == false && this.checkHeight() == false){
                    throw "your height and weight is not in range.";
                }
            } catch (error) {
                return error;
            }
        }
    }

    //to find users weight situation
    situation() {
        if (this.calculate() < 18.5) {
            return "Underweight";
        } else if(this.calculate() >= 18.5 && this.calculate() <= 24.9) {
            return "Normal weight";
        } else if(this.calculate() >= 25.0 && this.calculate() <= 29.9) {
            return "Pre-obesity";
        } else if(this.calculate() >= 30.0 && this.calculate() <= 34.9) {
            return "Obesity class I";
        } else if(this.calculate() >= 35.0 && this.calculate() <= 39.9) {
            return "Obesity class II";
        } else if(this.calculate() >= 40.0) {
            return "Obesity class III";
        }
    } 
}