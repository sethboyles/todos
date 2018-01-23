import Ember from 'ember';
let User = Ember.Object.extend({

  firstName: 'Jane',

  lastName: 'Doe',

  fullName: Ember.computed(function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),

  fullNameDidChange: Ember.observer('fullName', function() {
    let names = this.get('fullName').split();
    this.set('firstName', names[0]);
    this.set('lastName', names[1]);
  })
});

export default User;
