import * as uuid from 'uuid';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Item {
  id: string;
  name: string;
  description?: string;
}

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css'],
})
export class AddItemComponent implements OnInit {
  ngOnInit() {
    const items = JSON.parse(window.localStorage.getItem('vagas') || '[]');
    this.items = items;
  }
  constructor(readonly snackBar: MatSnackBar, private route: Router) {}
  items: Item[] = [];
  name = new FormControl('', Validators.required);
  description = new FormControl('', Validators.required);
  isValidForm() {
    return this.name.valid && this.description.valid;
  }
  addItem() {
    if (this.isValidForm()) {
      this.items.push({
        name: this.name.value,
        id: uuid.v4(),
        description: this.description.value,
      });
      window.localStorage.setItem('vagas', JSON.stringify(this.items));
      this.name.reset();
      this.description.reset();
      this.snackBar.open('Vaga adiciona com sucesso!', '', { duration: 2000 });
      this.route.navigate(['/vagas']);
    } else {
      this.snackBar.open('Preencha os dados corretamente!', '', {
        duration: 10000,
      });
    }
  }
}
