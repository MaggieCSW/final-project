INSERT INTO category(category)
VALUES
    ('crossbody'),
    ('tote'),
    ('handbag'),
    ('clutch');
    -- each one is a separate category.. is a string separated by (' '), (' '), (' ');

INSERT INTO brand(brand)
VALUES
    ('Louis Vuitton'),
    ('Hobo'),
    ('Michael Kors'),
    ('Coach'),
    ('Gucci');

INSERT INTO product(product_name, brand_id, product_image, price, description)
VALUES
    ("monogram canvas neverfull gm tote", 1, "product1image.jpg", 1275.00, "Lorem Ipsum.");




INSERT INTO product(product_name, brand_id, product_image, price, description, category)
VALUES
    ("classic hobo handbag", 2, "product_image2.jpg", 348.00, "Lorem Ipsum", "handbag"),
    ("jet set large print logo", 3, "product_image3.jpg", 378.00, "Lorem Ipsum", "crossbody")
    ("monogram canvas speedy 30 satchel", 1, "product_image4.jpg", 840, "Lorem Ipsum", "handbag")
    -- enter the rest from google sheets
    ;


    -- put into mysql
