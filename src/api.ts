'use strict';

module.exports.handler = async (event: any): Promise<any> => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      time: event.requestContext.requestTime,
    },
    null,
    2
  ),
});
