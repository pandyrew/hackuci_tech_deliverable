from datetime import datetime, timedelta
from typing import TypedDict

from fastapi import FastAPI, Form, status, Body
from fastapi.responses import RedirectResponse

from services.database import JSONDatabase

from dateutil.relativedelta import relativedelta

from dateutil.parser import parse



app = FastAPI()


class Quote(TypedDict):
    name: str
    message: str
    time: str


database: JSONDatabase[list[Quote]] = JSONDatabase("data/database.json")


@app.on_event("startup")
def on_startup() -> None:
    """Initialize database when starting API server."""
    if "quotes" not in database:
        print("Adding quotes entry to database")
        database["quotes"] = []


@app.on_event("shutdown")
def on_shutdown() -> None:
    """Close database when stopping API server."""
    database.close()


@app.post("/quote")
def post_message(name: str = Body(...), message: str = Body(...)) -> RedirectResponse:
    """
    Process a user submitting a new quote.
    You should not modify this function except for the return value.
    """
    now = datetime.now().replace(microsecond=0)

    quote = Quote(name=name, message=message, time=now.isoformat())
    database["quotes"].append(quote)

    # You may modify the return value as needed to support other functionality
    return 


@app.get("/quote")
def get_messages(time_period: str = None) -> list[Quote]:
    quotes = database["quotes"]
    if time_period:
        now = datetime.now().replace(microsecond=0)

        if time_period == 'week':
            start_time = now - timedelta(days=7)
        elif time_period == 'month':
            start_time = now - relativedelta(months=1)
        elif time_period == 'year':
            start_time = now - timedelta(days=365)
        elif time_period == '5':
            start_time = now - timedelta(days=1825)
        elif time_period == '100':
            start_time = now - timedelta(days=36500)

        quotes = [quote for quote in quotes if parse(quote['time']) >= start_time]
    return quotes