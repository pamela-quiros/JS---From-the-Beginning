class UI {
    constructor() {
        this.post = document.querySelector('#posts');
        this.titleInput = document.querySelector('#title');
        this.bodyInput = document.querySelector('#body');
        this.idInput = document.querySelector('#id');
        this.postSubmit = document.querySelector('.post-submit');
        this.forState = 'add';
    }

    showPosts(posts) {
        let out = '';

        posts.forEach((post) => {
            out += `
            <div class="card mb-3">
                <div class="card-body">
                    <h4 class="card-title">${post.title}</h4>
                    <p class="card-text">${post.body}</p>
                    <a href="#" class="edit card-link" data-id="${post.id}">
                    <i class="fa fa-pencil"></i>
                    </a>

                    <a href="#" class="delete card-link" data-id="${post.id}">
                    <i class="fa fa-remove"></i>
                    </a>
                </div>
            </div>`;
        });

        this.post.innerHTML = out;
    }

    showAlert(message, className) {
        this.clearAlert();

        //Create div
        const div = document.createElement('div');
        div.className = className;
        //Add text
        div.appendChild(document.createTextNode(message));
        //Get pattern
        const container = document.querySelector('.postContainer');
        //Get post
        const posts = document.querySelector('#posts');
        //Insert alert
        container.insertBefore(div, posts);
        setTimeout(() => { this.clearAlert() }, 3000);

    }

    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }

    clearFields() {
        this.titleInput.value = '';
        this.bodyInput.value = '';
    }

    fillForm(data) {
        this.titleInput.value = data.title;
        this.bodyInput.value = data.body;
        this.idInput.value = data.id;

        this.changeFormState('edit')
    }

    clearIdInput() {
        this.idInput.value = '';
    }

    changeFormState(type) {
        if (type === 'edit') {
            this.postSubmit.textContent = 'Update Post';
            this.postSubmit.className = 'post-submit btn btn-warning btn-block';

            //Create cancel button
            const button = document.createElement('button');
            button.className = 'post-cancel btn btn-light btn-block';
            button.appendChild(document.createTextNode('Cancel Edit'));

            //Get parent 
            const cardForm = document.querySelector('.card-form');
            //Get element to insert before
            const formEnd = document.querySelector('.form-end');
            //Insert cancel button
            cardForm.insertBefore(button, formEnd);

        } else {

            this.postSubmit.textContent = 'Post It';
            this.postSubmit.className = 'post-submit btn btn-primary btn-block';
            //Remove cnacel btn
            if (document.querySelector('.post-cancel')) {
                document.querySelector('.post-cancel').remove();
            }

            //Clear id from hidden field
            this.clearIdInput();

            //Clear inputs
            this.clearFields();

        }
    }
}

export const ui = new UI();