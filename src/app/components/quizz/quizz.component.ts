import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json'
import { timeout } from 'rxjs';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})

export class QuizzComponent implements OnInit {

  title: string = ""

  questions: any
  questionSelected: any

  ansewrs: string[] = []
  ansewrsSelected: string = ""

  questionIndex: number = 0
  questionMaxIndex: number = 0

  finished: boolean = false

  pontuacao: number = 0

  constructor() { }

  ngOnInit(): void {
    if (quizz_questions) {
      this.finished = false
      this.title = quizz_questions.title

      this.questions = quizz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.questions.length
    }
  }

  playerChoose(value: string): void {

    if (value === "A"){
      this.pontuacao += 1
    }
    
  }

  async nextStep() {
    this.questionIndex += 1

      if (this.questionMaxIndex > this.questionIndex) {
        this.questionSelected = this.questions[this.questionIndex]
      }
      else {
        this.finished = true
      }

    }

}
