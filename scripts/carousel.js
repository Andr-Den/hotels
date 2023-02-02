const comments = [
  {
    title: 'Goede service, lekker eten, toffe ambiance',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.',
    name: 'ALAIN HEYNDRICKX',
  },
  {
    title: 'Goede service',
    description: 'Stet clita kasd gubergren.',
    name: 'HEYLAIN ANDRICKX',
  },
]

let commentTitle = document.getElementById("comment-title");
let commentDescription = document.getElementById("comment-description");
let commentName = document.getElementById("comment-name");

commentTitle.innerHTML = `${comments[0].title}`
commentDescription.innerHTML = `${comments[0].description}`
commentName.innerHTML = `${comments[0].name}`

let next = document.getElementById("next-button");
let back = document.getElementById("back-button");
let nextSmall = document.getElementById("next-button-small");
let backSmall = document.getElementById("back-button-small");

let value = 0

next.onclick = function() {
  if (value === 1) {
    value = 0
  } else {
    value++
  }

  commentTitle.innerHTML = `${comments[value].title}`
  commentDescription.innerHTML = `${comments[value].description}`
  commentName.innerHTML = `${comments[value].name}`
}

back.onclick = function() {
  if (value === 0) {
    value = 1
  } else {
    value--
  }
  commentTitle.innerHTML = `${comments[value].title}`
  commentDescription.innerHTML = `${comments[value].description}`
  commentName.innerHTML = `${comments[value].name}`
}

nextSmall.onclick = function() {
  if (value === 1) {
    value = 0
  } else {
    value++
  }
  commentTitle.innerHTML = `${comments[value].title}`
  commentDescription.innerHTML = `${comments[value].description}`
  commentName.innerHTML = `${comments[value].name}`
}

backSmall.onclick = function() {
  if (value === 0) {
    value = 1
  } else {
    value--
  }
  commentTitle.innerHTML = `${comments[value].title}`
  commentDescription.innerHTML = `${comments[value].description}`
  commentName.innerHTML = `${comments[value].name}`
}

