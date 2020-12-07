from ingenialo.carts.utils import get_or_create_cart

def cart_data(request):
    cart = get_or_create_cart(request)
    print("-------------cart count-------------------")
    print(cart.products.count())
    items_in_cart=cart.products.count()
    return {'items_in_cart':items_in_cart}