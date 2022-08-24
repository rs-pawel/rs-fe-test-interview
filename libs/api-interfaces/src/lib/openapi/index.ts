import {
  ApiPaths as ItemAPIPaths,
  operations as ItemOperations,
} from './items';

export { ItemAPIPaths };

export type ListItemsRequest =
  ItemOperations['listItems']['parameters']['query'];

export type ListItemsResponse =
  ItemOperations['listItems']['responses']['200']['content']['application/json'];

export type CreateItemRequest =
  ItemOperations['createItem']['requestBody']['content']['application/json'];

export type CreateItemResponse =
  ItemOperations['createItem']['responses']['201']['content']['application/json'];

export type DeleteItemRequest =
  ItemOperations['deleteItem']['parameters']['path'];
