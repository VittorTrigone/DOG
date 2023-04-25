import { DogAppService } from './../dog-app.service';
import { Component, OnInit } from '@angular/core';
import { Dog } from './dog';

@Component({
  selector: 'app-dog-app',
  templateUrl: './dog-app.component.html',
  styleUrls: ['./dog-app.component.css']
})

export class DogAppComponent implements OnInit {
  dog : Dog = {} as Dog;

  constructor(private service : DogAppService){}

  ngOnInit(): void {
    this.loadDog();
  }

  loadDog() {
    this.service.getDog().subscribe({next : data => this.dog = data});
  }

  getBread() : string [] {
    return this.dog.message.split("/")[4].split("-");
  }
}
