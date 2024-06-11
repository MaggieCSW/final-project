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
    ("jet set large print logo", 3, "product_image3.jpg", 378.00, "Lorem Ipsum", "crossbody"),
    ("monogram canvas speedy 30 satchel", 1, "product_image4.jpg", 840.00, "Lorem Ipsum", "handbag"),
    ("lauren clutch wallet", 2, "product_image5.jpg", 148.00, "Lorem Ipsum", "clutch"),
    ("1941 classic shoulder bag", 4, "product_image6.jpg", 350.00, "Lorem Ipsum", "tote"),
    ("gg marmont small shoulder bag", 5, "product_image7.jpg", 1790.00, "Lorem Ipsum", "crossbody"),
    ("ophidia medium tote bag", 5, "product_image8.jpg", 1750.00, "Lorem Ipsum", "tote"),
    ("val duffle bag", 4, "product_image9.jpg", 398.00, "Lorem Ipsum", "tote"),
    ("mia crocodile envelope clutch", 3, "product_image10.jpg", 1290.00, "Lorem Ipsum", "clutch");

-- ALREADY PUT ABOVE INTO MYSQL
