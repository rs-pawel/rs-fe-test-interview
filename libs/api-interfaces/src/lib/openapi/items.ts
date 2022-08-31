/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/api/items': {
    get: operations['listItems'];
    post: operations['createItem'];
  };
  [key: `/api/items/${number}`]: {
    delete: operations['deleteItem'];
  };
}

export interface components {
  schemas: {
    Item: {
      name: string;
      title?: string;
      description?: string;
    };
    ItemWithId: components['schemas']['Item'] & {
      id: number;
    };
    ItemFilter: {
      id?: number;
      name?: string;
      title?: string;
      description?: string;
    };
    PaginationRequest: {
      page?: number;
      per?: number;
    };
    PaginationResponse: {
      page: number;
      per: number;
      total: number;
    };
  };
}

export interface operations {
  listItems: {
    parameters: {
      query: {
        /** Filter item */
        filter?: components['schemas']['ItemFilter'];
        /** Pagination */
        pagination?: components['schemas']['PaginationRequest'];
      };
    };
    responses: {
      /** OK */
      200: {
        content: {
          'application/json': {
            items: components['schemas']['ItemWithId'][];
            pagination?: components['schemas']['PaginationResponse'];
          };
        };
      };
    };
  };
  createItem: {
    responses: {
      /** Item was created */
      201: {
        content: {
          'application/json': components['schemas']['ItemWithId'];
        };
      };
    };
    /** New item data */
    requestBody: {
      content: {
        'application/json': components['schemas']['Item'];
      };
    };
  };
  deleteItem: {
    parameters: {
      path: {
        /** ID of item to delete */
        itemId: number;
      };
    };
    responses: {
      /** Item was deleted */
      204: never;
    };
  };
}

export interface external {}

export enum ApiPaths {
  listItems = '/api/items',
  createItem = '/api/items',
  deleteItem = '/api/items/:itemId',
}
