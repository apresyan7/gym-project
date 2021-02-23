import { Component, OnInit } from '@angular/core';
import { CardModel } from 'src/app/shared/model/card-model';
import { LogoModel } from 'src/app/shared/model/logo-model';
import { CardServiceService } from 'src/app/shared/service/card-service.service';
import { LogoServiceService } from 'src/app/shared/service/logo-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logoImages: LogoModel[] = [];

  cardContent: CardModel[] = []

  constructor(private logo: LogoServiceService, private card: CardServiceService) { }

  ngOnInit(): void {
    this.logoImages = this.logo.logoService;
    this.cardContent = this.card.cardService;
  }

}
