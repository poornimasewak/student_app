// alert("hello");
const addStuForm = $("#add-stu");
const nameEl = $("#name");
const courseEl = $("#course");
const emailEl = $("#email");
const phoneEl = $("#phone");
const username = $("#u-name");

addStuForm.on('submit', (e) => {
    e.preventDefault();
    // alert("hello")
    const stuInfo = {
        name: nameEl.val(),
        course: courseEl.val(),
        email: emailEl.val(),
        phone: phoneEl.val(),
        username: username.val()
    }
    console.log(stuInfo);

    fetch(`/api/add-student`, {
        method: 'POST',
        body: JSON.stringify(stuInfo),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(data => data ? window.location.reload() : alert("something not working"))
})

$(".del-btn").on('click', (e) => {
    console.log(e.target.dataset.id);
    const id = e.target.dataset.id;

    fetch(`/api/student/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => data ? window.location.reload() : alert("something not working"))

})

