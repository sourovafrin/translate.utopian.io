import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';

const history = typeof window === 'undefined' ? createMemoryHistory() : createBrowserHistory();

if (typeof window !== 'undefined' && window.analytics) {
  console.log('no analytics')
}

export default history;
