import { Component } from '@angular/core';
import { Code } from 'src/app/model/code.model';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-tabla-redeem-code',
  templateUrl: './tabla-redeem-code.component.html',
  styleUrls: ['./tabla-redeem-code.component.css'],
})
export class TablaRedeemCodeComponent {
  selectedOption!: string;

  constructor(private data: DataService) {}

  CODE_DATA: Code[] = this.data.getCodes();
  INFO_CODE_DATA = this.data.getPetByID(8);

  select(option: string) {
    this.selectedOption = option;
  }
}
