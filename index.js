import entrants_html from './fixtures/entrants.html';
import event_html from './fixtures/event.html';
import events_html from './fixtures/events.html';
import event_with_entrants_html from './fixtures/event_with_entrants.html';
import event_with_results_html from './fixtures/event_with_results.html';
import person_html from './fixtures/person.html';

export function injectFixtures(obj) {
  obj.inject('event_with_entrants_html', event_with_entrants_html);
  obj.inject('events_html', events_html);
  obj.inject('person_html', person_html);
  obj.inject('entrants_html', entrants_html);
}

export { entrants_html, event_html, events_html, event_with_entrants_html, event_with_results_html, person_html }


