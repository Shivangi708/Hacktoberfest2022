const data = [
    {
        name: "Alex",
        age: 26,
        degree: "btech",
        city: "Noida",
        lang: "javascript",
        framework: "vscode",
        image: 'https://randomuser.me/api/portraits/men/59.jpg'
    },
    {
        name: "Roy",
        age: 29,
        degree: "btech",
        city: "delhi",
        lang: "python",
        framework: "django",
        image: 'https://randomuser.me/api/portraits/men/60.jpg'
    },
    {
        name: "sam",
        age: 27,
        degree: "btech",
        city: "NewYork",
        lang: "java",
        framework: "netbeans",
        image: 'https://randomuser.me/api/portraits/men/61.jpg'
    },
    {
        name: "Christen",
        age: 25,
        degree: "btech",
        city: "Mexico",
        lang: "java",
        framework: "netbeans",
        image: 'https://randomuser.me/api/portraits/women/61.jpg'
    },
    {
        name: "Ana",
        age: 30,
        degree: "btech",
        city: "Banglore",
        lang: "python",
        framework: "flask",
        image: 'https://randomuser.me/api/portraits/women/23.jpg'
    },
];

function itr(profile) {
    let ind = 0;
    return {
        next: function () {
            return ind < profile.length ? { value: profile[ind++], done: false } : { done: true };
        }
    };
}
const candidates = itr(data);
cvnext();

const next = document.getElementById('next');
next.addEventListener("click", cvnext);

function cvnext() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
                    <li class="list-group-item">Name: ${currentCandidate.name}</li>
                    <li class="list-group-item">${currentCandidate.age} years old</li>
                    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
                    <li class="list-group-item">degree ${currentCandidate.degree}</li>
                    <li class="list-group-item">Primarily works on ${currentCandidate.lang}</li>
                    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
                </ul>`;
    }
    else {
        alert("end of cv's");
        window.location.reload();
    }
}