import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  items=[
    {
      item:'Biryani',
      img:'https://images3.alphacoders.com/670/thumb-1920-670514.jpg',
      recipe:'Biryani, also known as biriyani, biriani, birani or briyani, is a mixed rice dish with its origins among the Muslims of the Indian subcontinent. It can be compared to mixing a curry, later combining it with semi-cooked rice separately. This dish is especially popular throughout the Indian subcontinent, as well as among the diaspora from the region. It is also prepared in other regions such as Iraqi Kurdistan. It is made with Indian spices, rice, meat (chicken, goat, beef, lamb, prawn, or fish), vegetables or eggs.'
    },
    {
      item:'Rasagola',
      img:'https://odishasuntimes.com/wp-content/uploads/2015/09/rasagola.jpg',
      recipe:'The dish originated in East India; the present-day states of Odisha and West Bengal have variously claimed to be its birthplace. In 2015, a committee formed by the government of Odisha asserted that the sweet had originated in Odisha, where it is offered at the Puri Jagannath Temple.'
    },
    {
      item:'Vada',
      img:'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Breakfast_Tiffins/South_Indian_Medu_Vada_Sambar_with_Medu_Vada_Maker-8.jpg',
      recipe:'soak the urad dal for 4 hours or overnight.grind the soaked dal to a smooth batter with little water if required.if the batter becomes watery, then the instant relief would be to add some semolina or urad dal flour to it. ...add the spices, herbs, onions and salt. ...take a bowl of water'
    },
    {
      item:'Mutton Rogan Juice',
      img:'http://34c6b8841d4124020671-5bfabe5484726969ac662c6d377e2f3c.r16.cf2.rackcdn.com/uploads/old/nUgxExG4Jw.gif',
      recipe:'Mutton curry (also referred to as kosha mangsho,Goat curry and lamb curry) is an Indian curry dish that is prepared from mutton and vegetables[5] and originated in Bengal.[6] Railway mutton curry is a variation of the dish that originated during the British India. Primary ingredients of mutton curry include mutton, onion, tomato and spices.'
    },
    {
      item:'Chicken Tikka',
      img:'https://5.imimg.com/data5/AD/JY/MY-31026370/chicken-tikka-kebab-500x500.jpg',
      recipe:'A chicken tikka sizzler is a dish where chicken tikka is served on a heated plate with onions. The dish is also popular in Afghanistan, though the Afghan variant (like many other Persian, Turkish, and Arab dishes) is less spicy compared to the variants in the Indian subcontinent and uses beef and lamb in addition to chicken.'
    },
    {
      item:'PaneerButter Masala',
      img:'https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/04/paneer-butter-masala-recipe-step-by-step-instructions.jpg?fit=2592%2C1944&ssl=1',
      recipe:'Preparation for paneer butter masala. Heat 1 tbsp oil in a pan and add 2 green cardamoms. Then add 1 cup cubed onions & fry stirring often until transparent or pink. Next add 1½ cup tomatoes & ¼ tsp salt. Cook covered till the onion tomato mixture turns soft & mushy.'
    },
    {
      item:'Burger',
      img:'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg',
      recipe:'A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty, but the burger can include variations in structure, ingredients and composition. The cheese is usually added to the cooking hamburger patty shortly before serving, which allows the cheese to melt.'
    },
    {
      item:'Chilli Chicken',
      img:'https://i0.wp.com/files.hungryforever.com/wp-content/uploads/2017/07/19114034/dry-chilli-chicken-recipes.jpg?fit=1280%2C720&ssl=1',
      recipe:'Chilli chicken is a popular Indo-Chinese dish of chicken. In India, this may include a variety of dry chicken preparations. Though mainly boneless chicken is used in this dish, some people also recommend to use boned chicken too.'
    },
    {
      item:'Dalma',
      img:'https://appybistro.files.wordpress.com/2015/09/dalma-autenticoriyafood-oriyarasoi-blogspot-com.jpg',
      recipe:'Ingredients. 1 cup Arhar dal (Split Toor Dal) 2 Potatoes (Aloo) , cubed. 1 Carrot (Gajjar) , cubed. 1/2 cup Kaddu (Parangikai/ Pumpkin) , chopped. 1/2 cup Brinjal (Baingan / Eggplant) , chopped. 1/2 cup Papaya , green one, chopped. 1 Tomato , finely chopped. 1 inch Ginger.'
    },
    {
      item:'Chhena Poda',
      img:'https://orissadiary.com/wp-content/uploads/2019/07/chennapoda-640x402.jpg',
      recipe:'Chhena poda is usually made at home during traditional festivals in Odisha, such as Durga Puja. It is also served in small traditional roadside stalls and confectioneries throughout the state along with other delicacies such as rasagolla. Since the mid-1980s, it has gradually found its place in restaurant menus across Odisha. Odisha Milk Federation is investing heavily in mass-producing and popularizing this delicacy, determined not to let this happen again.'
    },
    
  ]
  itemData: any = '';
  sendItem(item){
    this.itemData=item;
  }
  constructor() { }

  ngOnInit() {
  }

}
