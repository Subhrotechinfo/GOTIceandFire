import { Component, OnInit } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookCover: any = "https://www.dailypioneer.com/uploads/2018/story/images/big/each--game-of-thrones--season-eight-episode-to-run-longer-than-60-mins-2018-11-15.jpg";
  characterCover: any = "https://www.recruiter.co.uk/sites/default/files/media/image/2017/game-of-thrones-chbo.jpg";
  houseCover: any ="https://pre02.deviantart.net/975f/th/pre/f/2016/184/5/d/game_of_thrones_house_sigil_folder_icons_by_katsy0-da8knil.png";

  bookCoverText: string = "A Song of Ice and Fire is a series of epic fantasy novels by the American novelist and screenwriter George R. R. Martin."
  characterCoverText: string = "A Song of Ice and Fire takes place on the fictional continents Westeros and Essos. The point of view of each chapter in the story is a limited perspective of a range of characters growing from nine, in the first novel,to 31 characters by the fifth novel. Three main stories interweave: a dynastic war among several families for control of Westeros, the rising threat of the supernatural Others in the northernmost reaches of Westeros, and the ambition of Daenerys Targaryen, the deposed king's exiled daughter, to assume the Iron Throne.";
  housecoverText:string="The Great Houses are the most powerful of the noble houses of the Seven Kingdoms. They exercise immense authority and power over their vassals and territories and are answerable only to the King of the Andals and the First Men.";

  constructor() { }

  ngOnInit() {
  }

}
