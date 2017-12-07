var notebook = new NoteList();

var noteTitle = document.querySelector('#new-note-title');
var noteText = document.querySelector('#new-note-text');
var addButton = document.querySelector('#create-new-note');
var allNotes = document.querySelector('.all-notes');

function preventEmptyNote(){
  if (noteTitle.value == false) {
    noteTitle.value = 'try a title?'
  }
  if (noteText.value == false) {
    noteText.value = 'write something?'
  }
}

function createNoteAndResetForm(note) {
  notebook.save(note);
  noteText.value = '';
  noteTitle.value = '';
}

function createNoteOnPage(div,title,text) {
  allNotes.insertBefore(div, allNotes.childNodes[0]);
  div.setAttribute('class', 'note');
  div.setAttribute('id', notebook._notes[notebook._notes.length-1]._id);
  div.appendChild(title);
  title.setAttribute('class', 'note-title');
  div.appendChild(text);
  text.setAttribute('class', 'note-text');
}

function addTextToNote(title,content) {
  title.innerHTML = notebook._notes[notebook._notes.length - 1]._name;
  if (notebook._notes[notebook._notes.length - 1].text.length > 50) {
    content.innerHTML = notebook._notes[notebook._notes.length - 1].text.slice(0, 50) + '...';
  } else {
    content.innerHTML = notebook._notes[notebook._notes.length - 1].text;
  };
}

function addNoteEventListener(allNotes) {
  allNotes.addEventListener('click', function() {
    document.querySelector('#overlay').classList.remove('light-overlay');
    document.querySelector('#overlay').classList.add('dark-overlay');
    document.querySelector('#title').setAttribute('style','color: white;');
    document.querySelector('#new-note-form').setAttribute('style','display: none;');
    addButton.setAttribute('style','display: none;');
    document.location.href=`#${this.id}`,true;
    // document.querySelector('.note').setAttribute('style','display: none;');
    // document.querySelector('').setAttribute('style','display: inline-block;')
  });
}

function createNote() {
  addButton.addEventListener('click', function(event) {
    var newNote = document.createElement('div');
    var newNoteTitle = document.createElement('h1');
    var newNoteText = document.createElement('p');

    preventEmptyNote();
    createNoteAndResetForm(new Note(noteTitle.value, noteText.value));
    createNoteOnPage(newNote,newNoteTitle,newNoteText);
    addTextToNote(newNoteTitle,newNoteText);
    event.preventDefault();
    var allNotes = document.querySelector('.note');
    addNoteEventListener(allNotes);
  });
}

createNote();
