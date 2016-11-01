import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('senate-subcommittee-list', 'Integration | Component | senate subcommittee list', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{senate-subcommittee-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#senate-subcommittee-list}}
      template block text
    {{/senate-subcommittee-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
