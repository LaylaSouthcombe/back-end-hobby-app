INSERT INTO users (first_name, second_name, password_digest, email) 
VALUES
    ('Layla', 'Southcombe', 'xxxx', 'laylasouthcombe789@outlook.com' ),
    ('Bob', 'Belcher', 'xxxx', 'bobbelcher3424234@gmail.com' ),
    ('Gene', 'Belcher', 'xxxx', 'genebelcher12234234@gmail.com' );

INSERT INTO listings (title, summary, price, open_to_swaps, category_id, subcategory_id, user_id, date_posted, availability, delivery, postage, collection, favourited_users, location) 
VALUES
    ('Paragliding set', 'Cool paragliding set, everything you need', 100.00, true, 12, 1, 1, '2022-12-12', 'Available', 'Not available', 'Not available', 'Available', '1, 2', 'London, United Kingdom'),
    ('Knitting set', 'Awesome knitting set, everything you need', 100.00, true, 12, 1, 1, '2022-12-12', 'Available', 'Not available', 'Not available', 'Available', '1, 2', 'London, United Kingdom'),
    ('Skateboarding set', 'Cool skateboarding set, everything you need', 150.00, false, 13, 2, 2, '2022-12-13', 'Sold', 'Available', 'Not available', 'Not available', '2, 3', 'Hull, United Kingdom');

INSERT INTO interactions (user_id, listing_id, watching, messaged, purchased) VALUES
    (1, 1, TRUE, FALSE, TRUE),
    (1, 2, FALSE, TRUE, FALSE);