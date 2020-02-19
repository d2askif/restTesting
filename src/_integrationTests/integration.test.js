import moxios from 'moxios';
import { testStore } from '../../Utils';
import { fetchPosts } from '../redux/actions/';

describe('fetchPosts action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('Store updates correctly', () => {
    const expectedState = [
      {
        title: 'Title 1',
        body: 'Body 1'
      },
      {
        title: 'Title 2',
        body: 'Body 2'
      },
      {
        title: 'Title 3',
        body: 'Body 3'
      }
    ];
    const store = testStore({ posts: [] });
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
    });
    return store.dispatch(fetchPosts()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toEqual(expectedState);
    });
  });
});
