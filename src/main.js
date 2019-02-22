var STORAGE_KEY = 'todos-vuejs-demo'
var todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    todos.forEach(function (todo, index) {
      todo.id = index
    })
    todoStorage.uid = todos.length
    return todos
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

new Vue({
  el: '#app',
  data: {
    todos: [],
    current: 0,
    options: [
      { value: -1, label: 'すべて', text: 'All', text2: 'fas fa-list-ul' },
      { value: 0, label: '作業中', text: 'List', text2: 'fas fa-tasks' },
      { value: 1, label: '完了', text: 'Done', text2: 'fas fa-check' }
    ]
  },

  computed: {
    computedTodos: function () {
      return this.todos.filter(function (el) {
        return this.current < 0 ? true : this.current === el.state
      }, this)
    },
    labels() {
      return this.options.reduce(function (a, b) {
        return Object.assign(a, { [b.value]: b.label })
      }, {})
    }
  },
  watch: {
    todos: {
      handler: function (todos) {
        todoStorage.save(todos)
      },
      deep: true
    }
  },
  created() {
    this.todos = todoStorage.fetch()
  },
  methods: {
    doAdd: function(event, value) {
      var comment = this.$refs.comment
      if (!comment.value.length) {
        return
      }
      this.todos.push({
        id: todoStorage.uid++,
        comment: comment.value,
        state: 0
      })
      comment.value = ''
    },
    doChangeState: function (item) {
      item.state = !item.state ? 1 : 0
      var sound = [
          'sound/voice1.mp3',
          'sound/voice2.mp3',
          'sound/voice3.mp3',
          'sound/voice4.mp3',
          'sound/voice5.mp3',
          'sound/voice6.mp3',
          'sound/voice7.mp3',
          'sound/voice8.mp3',
          'sound/voice9.mp3',
          'sound/voice10.mp3',
          'sound/voice11.mp3'
        ]
      var randSounds = sound[Math.floor(Math.random() * sound.length)]
      var audio = new Audio()
      audio.src = randSounds
      audio.play()
    },
    doRemove: function (item) {
      var index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    }
  }
})
