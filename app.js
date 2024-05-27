let subscribeBtn1 = document.getElementById('subscribeBtn1')
let subscribeDiv = document.getElementById('subscribeDiv')
let subscribeBtn2 = document.getElementById('subscribeBtn2')
let aboutDiv = document.getElementById('aboutDiv')

let getAboutDiv = () => {
    let aboutPeopleBox1 = document.getElementById('aboutPeopleBox1')
    let aboutPeopleBox2 = document.getElementById('aboutPeopleBox2')
    let aboutPeopleBox3 = document.getElementById('aboutPeopleBox3')
}





subscribeBtn1.addEventListener('click', () => {
    subscribeDiv.classList.add('subscribeDivOpen')
    subscribeDiv.classList.remove('subscribeDivClose')
})

subscribeBtn2.addEventListener('click', () => {
    subscribeDiv.classList.add('subscribeDivClose')
    subscribeDiv.classList.remove('subscribeDivOpen')
})

let aboutPeople = [
    {
        peoplename: 'TITLE HEADING',
        peopledecriptionBig: 'Title description, ',
        peopledecriptionsmall: 'May 2, 2016',
        peoplepicture: 'https://www.w3schools.com/w3images/girl_hat.jpg',
        aboutpeopletext1: 'More Hats! I am crazy about hats these days. Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
        aboutpeopletext2: 'Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        repliesquanitity: 1,
    },
    {
        peoplename: 'TITLE HEADING',
        peopledecriptionBig: 'Title description, ',
        peopledecriptionsmall: 'April 23, 2016',
        peoplepicture: 'https://www.w3schools.com/w3images/man_hat.jpg',
        aboutpeopletext1: 'Hats! The trend this summer is hats for men!',
        aboutpeopletext2: 'Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
        repliesquanitity: 2,
    },
    {
        peoplename: 'TITLE HEADING',
        peopledecriptionBig: 'Title description, ',
        peopledecriptionsmall: 'April 7, 2016',
        peoplepicture: 'https://www.w3schools.com/w3images/runway.jpg',
        aboutpeopletext1: 'Dont miss! The runway in New York City this weekend is gonna be legendary!',
        aboutpeopletext2: 'Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.',
        repliesquanitity: 3,
    }
]

function createdesqription() {

    let peopleName = document.createElement('h2')
    peopleName.innerText = this.peoplename
    peopleName.className = 'peopleName'
    getAboutDiv.forEach((element) => {
        element.appendchild(tag)
    })

    let smallDesription1 = document.createElement('h5')
    smallDesription1.innerText = this.peopledecriptionBig
    smallDesription1.className = 'smallDesription1'
    getAboutDiv.forEach((element) => {
        element.appendchild(tag)
    })

    let smallDesription2 = document.createElement('span')
    smallDesription2.innerText = this.peopledecriptionsmall
    smallDesription2.className = 'smallDesription2'
    getAboutDiv.forEach((element) => {
        element.appendchild(tag)
    })

    let peopleImg = document.createElement('img')
    peopleImg.src = this.peoplepicture
    peopleImg.className = 'peopleImg'
    getAboutDiv.forEach((element) => {
        element.appendchild(tag)
    })

    let peopleText1 = document.createElement('p')
    peopleText1.innerText = this.aboutpeopletext1
    peopleText1.className = 'peopleText1'
    getAboutDiv.forEach((element) => {
        element.appendchild(tag)
    })

    let peopleText2 = document.createElement('p')
    peopleText2.innerText = this.aboutpeopletext2
    peopleText2.className = 'peopleText2'
    peopleText1.appendChild(peopleText2)
}

aboutPeople.forEach((element) => {
    createdesqription.bind(element)
})


