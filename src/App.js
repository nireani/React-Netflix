
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from './components/Landing';
import Catalog from './components/Catalog';
import Movie from './components/Movie';
import MovieDetails from './components/MovieDetails';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      catalog : [{
        Nir:{
          budget:50,
          catalog:[
      
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
        { id: 5, isRented: false, title: "Pulp Fiction", year: 1994, img: "https://i.imgur.com/EtKd1cd.jpg", descrShort: "Pulp Fiction was one of the great films of the 90s. It was incredibly inventive, and whilst not being Quentin Tarantino’s first film, it was the one that turned the creative and talented director in to a household name with his unique style and fantastic use of dialogue in his films which other directors would often shy away from." },
        { id: 6, isRented: false, title: "The Great Gatsby", year: 2013, img: "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_.jpg", descrShort: "An ambitious stockbroker moves to New York and is befriended by a mysterious millionaire named Jay Gatsby. Beguiled at first by the glitz and glamour of his new surroundings, a surprising chain of events lead Nick to become utterly repelled by the wreck-less behaviour of the wealthy elite and their questionable morals." },
        { id: 7, isRented: false, title: "Natural Born Killers", year: 1994, img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS8MylVkX04aE5cHEImp8m9ypvDOnJi-fvBDHdkR2B8-q0w4Uy-", descrShort: "The film tells the story of two victims of traumatic childhoods who become lovers and mass murderers, and are irresponsibly glorified by the mass media. The film is based on an original screenplay by Quentin Tarantino that was heavily revised by Stone, writer David Veloz, and associate producer Richard Rutowski." },
        { id: 8, isRented: false, title: "Scarface ", year: 1983, img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwAImHuuD8C99t7JrHqiHQ36eyfmfPhCrNovS7dxWv0rJg9zHv", descrShort: "Scarface is a 1983 American crime drama film directed by Brian De Palma and written by Oliver Stone. A remake of the 1932 film of the same name, it tells the story of Cuban refugee Tony Montana (Al Pacino), who arrives penniless in 1980s Miami and goes on to become a powerful drug lord." }

      ]},
      Vio:{
        budget:50,
        catalog:[
      
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
        { id: 5, isRented: false, title: "Pulp Fiction", year: 1994, img: "https://i.imgur.com/EtKd1cd.jpg", descrShort: "Pulp Fiction was one of the great films of the 90s. It was incredibly inventive, and whilst not being Quentin Tarantino’s first film, it was the one that turned the creative and talented director in to a household name with his unique style and fantastic use of dialogue in his films which other directors would often shy away from." },
        { id: 6, isRented: false, title: "The Great Gatsby", year: 2013, img: "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_.jpg", descrShort: "An ambitious stockbroker moves to New York and is befriended by a mysterious millionaire named Jay Gatsby. Beguiled at first by the glitz and glamour of his new surroundings, a surprising chain of events lead Nick to become utterly repelled by the wreck-less behaviour of the wealthy elite and their questionable morals." },
        { id: 7, isRented: false, title: "Natural Born Killers", year: 1994, img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS8MylVkX04aE5cHEImp8m9ypvDOnJi-fvBDHdkR2B8-q0w4Uy-", descrShort: "The film tells the story of two victims of traumatic childhoods who become lovers and mass murderers, and are irresponsibly glorified by the mass media. The film is based on an original screenplay by Quentin Tarantino that was heavily revised by Stone, writer David Veloz, and associate producer Richard Rutowski." },
        { id: 8, isRented: false, title: "Scarface ", year: 1983, img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwAImHuuD8C99t7JrHqiHQ36eyfmfPhCrNovS7dxWv0rJg9zHv", descrShort: "Scarface is a 1983 American crime drama film directed by Brian De Palma and written by Oliver Stone. A remake of the 1932 film of the same name, it tells the story of Cuban refugee Tony Montana (Al Pacino), who arrives penniless in 1980s Miami and goes on to become a powerful drug lord." }

      ]},
      Yam:{
        budget:50,
        catalog:[
      
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: false, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: false, title: "The Sword in the Stone", year: 1963, img: "https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." },
        { id: 5, isRented: false, title: "Pulp Fiction", year: 1994, img: "https://i.imgur.com/EtKd1cd.jpg", descrShort: "Pulp Fiction was one of the great films of the 90s. It was incredibly inventive, and whilst not being Quentin Tarantino’s first film, it was the one that turned the creative and talented director in to a household name with his unique style and fantastic use of dialogue in his films which other directors would often shy away from." },
        { id: 6, isRented: false, title: "The Great Gatsby", year: 2013, img: "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_.jpg", descrShort: "An ambitious stockbroker moves to New York and is befriended by a mysterious millionaire named Jay Gatsby. Beguiled at first by the glitz and glamour of his new surroundings, a surprising chain of events lead Nick to become utterly repelled by the wreck-less behaviour of the wealthy elite and their questionable morals." },
        { id: 7, isRented: false, title: "Natural Born Killers", year: 1994, img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS8MylVkX04aE5cHEImp8m9ypvDOnJi-fvBDHdkR2B8-q0w4Uy-", descrShort: "The film tells the story of two victims of traumatic childhoods who become lovers and mass murderers, and are irresponsibly glorified by the mass media. The film is based on an original screenplay by Quentin Tarantino that was heavily revised by Stone, writer David Veloz, and associate producer Richard Rutowski." },
        { id: 8, isRented: false, title: "Scarface ", year: 1983, img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwAImHuuD8C99t7JrHqiHQ36eyfmfPhCrNovS7dxWv0rJg9zHv", descrShort: "Scarface is a 1983 American crime drama film directed by Brian De Palma and written by Oliver Stone. A remake of the 1932 film of the same name, it tells the story of Cuban refugee Tony Montana (Al Pacino), who arrives penniless in 1980s Miami and goes on to become a powerful drug lord." }

      ]}
       } ]
  }}

  handleRent = (id, rent, user) => {
    let newCatalog = [...this.state.catalog]

    {newCatalog[0][user].budget>0&&rent?newCatalog[0][user].catalog[id].isRented = false:newCatalog[0][user].catalog[id].isRented = true}
    {newCatalog[0][user].budget>0&&!rent?newCatalog[0][user].catalog[id].isRented = true:newCatalog[0][user].catalog[id].isRented = false}
    {newCatalog[0][user].budget>0&&!rent ? newCatalog[0][user].budget-=10:newCatalog[0][user].budget=newCatalog[0][user].budget}

      this.setState({
        catalog: newCatalog
      })
  }



render() {



  return (
    <Router>
      <div className="App">
       <span className="LandingHeader">React Netflix</span>
       
        <Route exact path="/" render={({ match }) => <Landing catalog={this.state.catalog} match={match}></Landing>}></Route>
        <Route exact path="/Catalog/:user" render={({ match }) => <Catalog handleRent={this.handleRent} catalog={this.state.catalog} match={match}></Catalog>}></Route>
        <Route exact path="/Movie.js" render={({ match }) => <Movie match={match}></Movie>}></Route>
        <Route exact path="/MovieDetails/:user/:id" render={({ match }) => <MovieDetails catalog={this.state.catalog} match={match}></MovieDetails>}></Route>

      </div>
    </Router>
  )
}
}

export default App;
