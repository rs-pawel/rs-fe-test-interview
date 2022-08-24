import axios from 'axios';
import { stringify } from 'qs';
import Route from 'route-parser';
import {
  ItemAPIPaths,
  ListItemsRequest,
  ListItemsResponse,
  CreateItemRequest,
  CreateItemResponse,
  DeleteItemRequest,
} from '@rs/api-interfaces';

export const getItems = (params?: ListItemsRequest) =>
  axios
    .get<ListItemsResponse>(ItemAPIPaths.listItems, {
      params,
      paramsSerializer: stringify,
    })
    .then(({ data }) => data);

export const createItem = (item: CreateItemRequest) =>
  axios
    .post<CreateItemResponse>(ItemAPIPaths.createItem, item)
    .then(({ data }) => data);

const deleteRoute = new Route(ItemAPIPaths.deleteItem);
export const deleteItem = (itemId: DeleteItemRequest['itemId']) =>
  axios
    .delete<undefined>(deleteRoute.reverse({ itemId }) as string)
    .then(({ data }) => data);
