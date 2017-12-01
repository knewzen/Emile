// admettant que j'ai result1, result2....result5 = résultats des dés envoyés au serveur  où chq dés a son id
// ""  player1 player2... : lengh player
//NbPlayerMax = 5 par ex  ---> AddScore à adapter
var NbDiceRoll =
var NbPlayers =
var PlayerPlaying = // 1 ou 2... : player1, player2
var TargetPlayerScore = // Pareil que PlayerPlaying, acquis par choix du joueur
var DicePlayed = // liste val
var DiceNotPlayed = // liste val

function CalculScorePot(ScorePot) {
  var ListeDice = AnalyseListeDicePoint( DicePlayed + DiceNotPlayed )
  If ( Suite() ) {
    ScorePot += 1000
  }
  If ( Brelan() ) {
    var list = SimilarValue ( DicePlayed)
    If ( list = [1]) {
      ScorePot += 700
    }
    Else {
      ScorePot += liste[0]*100
    }
  }
  Else {
    var listPoint = AnalyseListeDicePoint( DicePlayed + DiceNotPlayed) {

    }


  }
}

function AnalyseListeDicePoint ( ListeDice ) {


  return // liste val marquante : 1 et 5
}

function SimilarValue ( ListOfDice ) {

    return // forme [[val,NbFois],....]
}

function Brelan( DicePlayed ) {
  If ( NbDiceRoll >= 3) {
    var list = SimilarValue ( DicePlayed)
    If ( list[0][1] === 3 ) {
      return true
    }
  }
  Else {
    return false
  }
}

function Suite() {
  If ( NbDiceRoll === 5) {
    //Boolean
  }
}

function EndTurn () {

}

function AddScoreMe ( TargetPlayerScore ) {
    If ( 1 === TargetPlayerScore ) {
      ScorePlayer1 += ScorePot
    }
    If ( 2 === TargetPlayerScore ) {
      ScorePlayer2 += ScorePot
    }
    If ( 3 === TargetPlayerScore ) {
      ScorePlayer3 += ScorePot
    }
    If ( 4 === TargetPlayerScore ) {
      ScorePlayer4 += ScorePot
    }
    If ( 5 === TargetPlayerScore ) {
      ScorePlayer5 += ScorePot
    }
    ScorePot = 0  // à réinitialisé dans jeu.js
    EndTurn()
}

function AddScoreNotMe ( TargetPlayerScore ) {
  If ( 1 === TargetPlayerScore ) {
    ScorePlayer1 += -ScorePot/2   // à coder en int à la centaine supérieur
  }
  If ( 2 === TargetPlayerScore ) {
    ScorePlayer2 += -ScorePot/2
  }
  If ( 3 === TargetPlayerScore ) {
    ScorePlayer3 += -ScorePot/2
  }
  If ( 4 === TargetPlayerScore ) {
    ScorePlayer4 += -ScorePot/2
  }
  If ( 5 === TargetPlayerScore ) {
    ScorePlayer5 += -ScorePot/2
  }
  ScorePot = 0  // à réinitialisé dans jeu.js
  EndTurn()

}

If ( LostRoll() ) {
  If ( NbDiceRoll === 5 ) {
    ScorePot = -1000
  }
  Else {
    ScorePot = -100
  }
  AddScore(PlayerPlaying)
}

function LostRoll() {
  var liste = DicePlayed + DiceNotPlayed
  If ( 5 not in liste && 1 not in liste && Brelan() === false ) { // Syntaxe à revoir bien entendu
    return true;
  }
  Else {
    return false;
  }
}
