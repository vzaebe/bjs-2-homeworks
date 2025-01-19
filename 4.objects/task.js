function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  Student.prototype.setSubject = function(subjectName) {
    if (!this.excluded) { 
      this.subject = subjectName;
    }
  };
  
  Student.prototype.addMarks = function(...marksToAdd) {
    if (!this.excluded && Array.isArray(this.marks)) {
      for (let mark of marksToAdd) {
        this.marks.push(mark);
      }
    }
  };
  
  Student.prototype.getAverage = function() {
    if (!this.marks || !this.marks.length) {
        return 0;
    }
    
    let sum = this.marks.reduce((acc, mark) => acc + mark, 0);
    return sum / this.marks.length;
  };
  

  Student.prototype.exclude = function(reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;

  };
