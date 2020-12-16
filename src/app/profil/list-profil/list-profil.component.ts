import { Component, OnInit } from '@angular/core';
import {ProfilService} from '../../../Services/profil.service';
import {ProfilModal} from '../../../modals/ProfilModal';
import {MatTableDataSource} from '@angular/material/table';
//
export interface UserData {
  id: string;
  libelle: string;
}

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {

  displayedColumns: string[] = ['id', 'libelle'];
  dataSource: MatTableDataSource<UserData>;

  profils: any = [] ;

  constructor(private profilService: ProfilService) { }

  ngOnInit(): void {
    this.profilService.getAllProfil().subscribe( data => {
        // tslint:disable-next-line:no-unused-expression triple-equals
      // console.log(data) ;
        this.profils = data ;
        // this.profils = this.profils['hydra:member']
        console.log(this.profils) ;

      }
    );
  }
}
