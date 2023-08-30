import Route from 'route-parser';
import qs from 'qs';
import {
  ItemAPIPaths,
  ListItemsRequest,
  ListItemsResponse,
  CreateItemRequest,
  CreateItemResponse,
  DeleteItemRequest,
} from '@rs/api-interfaces';

export const getItems = async (
  params?: ListItemsRequest
): Promise<ListItemsResponse> => {

  const queryString = qs.stringify(params, { encode: false});
  const response = await fetch(`${ItemAPIPaths.listItems}?${queryString}`)
  const data = await response.json();

  return data as ListItemsResponse;
};

export const createItem = async (
  item: CreateItemRequest
): Promise<CreateItemResponse> => {
  // Implementation
  // Path: ItemAPIPaths.createItem

  return {} as CreateItemResponse;
};

const deleteRoute = new Route(ItemAPIPaths.deleteItem);
export const deleteItem = async (
  itemId: DeleteItemRequest['itemId']
): Promise<undefined> => {
  // Implementation
  // Path: deleteRoute.reverse({ itemId })

  return undefined;
};
