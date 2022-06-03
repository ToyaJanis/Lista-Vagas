import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from '../add-item/add-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  items: Item[] = [];
  constructor(readonly snackBar: MatSnackBar) {}
  ngOnInit(): void {
    const items = JSON.parse(window.localStorage.getItem('vagas') || '[]');
    this.items = items;
  }
  removeItem(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
    window.localStorage.setItem('vagas', JSON.stringify(this.items));
    this.snackBar.open('Vaga removida com sucesso!', '', { duration: 2000 });
  }
}
