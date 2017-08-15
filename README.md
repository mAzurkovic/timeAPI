# Time Micro API
> A small API developed for fun...

## API Endpoints

* `/time/:unixdate`: Pass a unix time string, and api will return it, and the other formatted times.

* `/time/:naturaldate`: Pass a natural date/time string, and api will return it, and the other formatted times.

## Examples

* Passing a unix timestamp: `/time/1040803200` will return
  ```
  {
    "unix": 1040803200,
    "natural": "December 25th 2002",
    "formatted": "12/25/2002"
  }
  ```

* And a natural date: `/time/August 10 2017` will give
  ```
  {
    "unix": 1502348400,
    "natural": "August 10th 2017",
    "formatted": "08/10/2017"
  }
  ```
