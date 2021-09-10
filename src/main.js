import { mockEvents } from './mocks/mock-event.js';
import { render, RenderPosition } from './utils/render.js';
import MenuView from './view/menu-view.js';
import FilterPresenter from './presenter/filter-presenter.js';
import EventBoardPresenter from './presenter/event-board-presenter.js';
import EventsModel from './model/events-model.js';
import FilterModel from './model/filter-model.js';

const eventsModel = new EventsModel();
eventsModel.setEvents(mockEvents);

const filterModel = new FilterModel();

const siteHeaderContainer = document.querySelector('.page-header');
const siteMainElement = document.querySelector('.page-main');
const siteMenuContainer = siteHeaderContainer.querySelector('.trip-controls__navigation');
const infoContainer = siteHeaderContainer.querySelector('.trip-main');
const filtersContainer = siteHeaderContainer.querySelector('.trip-controls__filters');
const eventsContainer = siteMainElement.querySelector('.trip-events');

const eventBoardPresenter = new EventBoardPresenter(eventsContainer, infoContainer, eventsModel, filterModel);

render(siteMenuContainer, new MenuView(), RenderPosition.BEFOREEND);
const filterPresenter = new FilterPresenter(filtersContainer, filterModel, eventsModel);

filterPresenter.init();
eventBoardPresenter.init();

document.querySelector('.trip-main__event-add-btn').addEventListener('click', (evt) => {
  evt.preventDefault();
  eventBoardPresenter.createEvent();
});
