""""
this scripts upload data to the products models
to excecute 

    open django shell
        python manage.py shell
    import this script
        from ingenialo.products.utils.import_csv import import_data
    call our function
        import_data('./ingenialo/products/utils/products.csv')

"""

import csv
from ingenialo.products.models import Product


def import_data(csv_filename):
    print('importing data')
    with open(csv_filename, mode='r') as csvfile:
        print(csvfile)
        # reader = csv.DictReader(csvfile)
        # for row in reader:
        #     product = Product(**row)
        #     product.save()
        #     print(product.name)