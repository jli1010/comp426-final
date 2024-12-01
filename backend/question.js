export class Question {
    #id;
    #question;
    #answer;
    static #next_id = 1;
    static #all_questions = [];

    constructor(id, question, answer) {
        this.id = id;
        this.question = question;
        this.answer = answer;
    }

    update(question, answer) {
        this.question = question;
        this.answer = answer;
    }

    display() {
        return `Question: ${this.question} - Answer: ${this.answer}`;
    }

    static create(data) {
        if (data !== undefined && data instanceof Object) {
        let id = Question.#next_id;
          let q = new Question(
            id,
            data.question,
            data.answer,
          );
          Question.#all_questions.push(q);
          Question.#next_id += 1;
          return q;
        }
        return null;
      }
    
    findID(id){
        return Question.#all_questions.find((question) => question.getID() == id);
    }

    json() {
        return {
          id: this.#id,
          question: this.#question,
          answer: this.#answer,
        };
      }
}