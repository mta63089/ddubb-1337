import pandas as pd


def find_products(products: pd.DataFrame) -> pd.DataFrame:
    fat=products["low_fats"] == 'Y'
    rec=products["recyclable"] == 'Y'
    fin=products[fat & rec]
    return fin[["product_id"]]
    
    
def find_products_alt(products: pd.DataFrame) -> pd.DataFrame:
    return pd.DataFrame(products[(products.low_fats == 'Y') & (products.recyclable == 'Y')]['product_id'])

def selectData(students: pd.DataFrame) -> pd.DataFrame:
    return pd.DataFrame(students[("student_id"==101)]['name','age'])