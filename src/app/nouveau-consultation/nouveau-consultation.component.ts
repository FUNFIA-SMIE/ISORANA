import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-consultation',
  templateUrl: './nouveau-consultation.component.html',
  styleUrls: ['./nouveau-consultation.component.scss'],
  standalone: false
})
export class NouveauConsultationComponent implements OnInit {
  data: any;
  searchText: string = '';
  // items: string[] = ['Option 1', 'Option 2', 'Option 3', 'Autre'];
filteredItems: any[] = [];
  constructor(private http: HttpClient) { }
  items: any;
  isDataReady = false;

  async ngOnInit() {

    this.data = await this.http.get('assets/data/Personnel_isorana.json').toPromise();
    this.items = this.data;
    console.log(this.items);

  }

  filterItems(event: any) {
    this.isDataReady = true;

    const val = event.target.value?.toLowerCase().trim();

    if (val && val !== '') {
      this.filteredItems = this.items.filter((item: Personne) =>
        item.nom.toLowerCase().includes(val) ||
        item.prenoms.toLowerCase().includes(val) ||
        item.societe.toLowerCase().includes(val)
      );
      this.isDataReady = false;

    } else {
      this.filteredItems = [];
      this.isDataReady = false;

    }
  }

  selectItem(item: any) {
    console.log(item);
    this.searchText = `${item.nom} ${item.prenoms} (${item.societe})`;
    this.filteredItems = [];
    console.log(this.searchText);
  }


}

interface Personne {
  nom: string;
  prenoms: string;
  societe: string;
  profession?: string | null;
  id_produit: number;
  // ajoute d'autres propriétés si besoin
}

