function display_shine_calc_info(id) {
  let parent_div = null
  parent_div = (document.getElementById(id).parentNode)

  if (id == 'covid_ML_info') {
    var body = 'This is a Machine Learning Project I made in CS 4780. It was a Kaggle Competition'

  }


  if (id == 'stackup_simulator_info') {
    var body = "This Web application tries to simulate the popular College Drinking Game of Stack Cup. It analyzes player order, strategy, and skillset to determine who is likely to win. It is modeled after a Discrete Time Markov Chain."
  }

  if (id == 'shine_calc_info') {

    var body = "This was a project conducted in partnership with MIT. The Goal of this project was to provide a front-end web application for a back end carbon emission calculator. The project aimed to give sustainably-minded businesses insight into where to cut emissions "
  }

  if (id == 'Markov_info') {
    var body = "Built Arcade in Terminal. The Arcade was created completely from scratch and is written in Ocaml, a popular functional programming language. The Arcade contains One and Two Player Wordle, Absurdle Greedy Search, and Word Search."
  }

  copy_parent_div = parent_div.innerHTML
  parent_div.innerHTML = '<div class = "back_side fade-in-text"><br>' + body + '<br><svg id = ' + id + "_outie" + ' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" info_svg bi bi-arrow-up-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/></svg><div>'

  document.getElementById(id + '_outie').addEventListener('click', function () {
    parent_div.innerHTML = copy_parent_div
  }, false);
}
