import pandas as pd


def selectFirstRows(e: pd.DataFrame) -> pd.DataFrame:
    return e.head(3)