import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {ContactsApp} from '../app/contacts';

beforeEachProviders(() => [ContactsApp]);

describe('App: Contacts', () => {
  it('should have the `defaultMeaning` as 42', inject([ContactsApp], (app: ContactsApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([ContactsApp], (app: ContactsApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

