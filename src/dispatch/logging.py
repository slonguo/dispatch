import logging
from sqlalchemy import event
from sqlalchemy.engine import Engine
import time
from dispatch.config import LOG_LEVEL


def configure_logging():
    if LOG_LEVEL == "DEBUG":
        # log level:logged message:full module path:function invoked:line number of logging call
        LOGFORMAT = "%(levelname)s:%(message)s:%(pathname)s:%(funcName)s:%(lineno)d"
        logging.basicConfig(level=LOG_LEVEL, format=LOGFORMAT)
    else:
        logging.basicConfig(level=LOG_LEVEL)

    logger = logging.getLogger()
    logger.setLevel(logging.DEBUG)

    @event.listens_for(Engine, "before_cursor_execute")
    def before_cursor_execute(conn, cursor, statement, parameters, context, executemany):
        conn.info.setdefault("query_start_time", []).append(time.time())
        # logger.debug("Start Query: %s", statement)

    @event.listens_for(Engine, "after_cursor_execute")
    def after_cursor_execute(conn, cursor, statement, parameters, context, executemany):
        total = time.time() - conn.info["query_start_time"].pop(-1)
        # logger.debug("Query Complete!")
        # logger.debug("Total Time: %f", total)
