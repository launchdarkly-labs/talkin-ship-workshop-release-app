resource "aws_dynamodb_table_item" "seed_data" {
  table_name = var.aws_dynamo_table
  hash_key   = var.aws_dynamo_hash_key

  for_each = {
    "3" = {
      account_type = "credit"
      amount       = 185.30
      date         = "2024-01-24"
      merchant     = "SuperMarket"
      status       = "pending"
    }
    "4" = {
      account_type = "checking"
      amount       = 185.30
      date         = "2024-01-24"
      merchant     = "SuperMarket"
      status       = "successful"
    }
    "5" = {
      account_type = "checking"
      date : "2023-06-01",
      merchant : "Pharmacy",
      amount : 13.32,
      status : "successful"
    }
    "6" = {
      account_type = "checking"
      date : "2023-03-23",
      merchant : "TechStore",
      amount : 188.35,
      status : "successful"
    }
    "7" = {
      account_type = "checking"
      date : "2023-09-15",
      merchant : "BookStore",
      amount : 221.99,
      status : "pending"
    }
    "8" = {
      account_type = "credit"
      date : "2023-06-05",
      merchant : "TechStore",
      amount : 105.25,
      status : "successful"
    }
    "9" = {
      account_type = "checking"
      date : "2023-09-17",
      merchant : "OnlineMarket",
      amount : 283.56,
      status : "pending"
    }
    "11" = {
      account_type = "checking"
      date : "2023-05-01",
      merchant : "GasStation",
      amount : 347.89,
      status : "successful"
    }
    "12" = {
      account_type = "checking"
      date : "2023-10-05",
      merchant : "SuperMarket",
      amount : 242.05,
      status : "successful"
    }

    "13" = {
      account_type = "checking"
      amount       = 99.99
      date         = "2023-07-15"
      merchant     = "HardwareStore"
      status       = "pending"
    }

    "14" = {
      account_type = "credit"
      amount       = 199.50
      date         = "2023-09-30"
      merchant     = "FurnitureShop"
      status       = "successful"
    }

    "15" = {
      account_type = "credit"
      amount       = 49.99
      date         = "2023-11-11"
      merchant     = "JewelryStore"
      status       = "successful"
    }
    "16" = {
      account_type = "checking"
      amount       = 75.25
      date         = "2023-08-20"
      merchant     = "SportingGoodsStore"
      status       = "pending"
    }

    "17" = {
      account_type = "credit"
      amount       = 299.99
      date         = "2023-10-10"
      merchant     = "ApplianceStore"
      status       = "successful"
    }

    "18" = {
      account_type = "credit"
      amount       = 89.99
      date         = "2023-12-01"
      merchant     = "MusicStore"
      status       = "successful"
    }

    "19" = {
      account_type = "checking"
      amount       = 125.50
      date         = "2023-09-05"
      merchant     = "PetStore"
      status       = "pending"
    }

    "20" = {
      account_type = "credit"
      amount       = 199.75
      date         = "2023-11-25"
      merchant     = "CosmeticsStore"
      status       = "successful"
    }

    "21" = {
      account_type = "checking"
      amount       = 50.00
      date         = "2023-10-15"
      merchant     = "CoffeeShop"
      status       = "pending"
    }

    "22" = {
      account_type = "credit"
      amount       = 149.99
      date         = "2023-12-20"
      merchant     = "ToyStore"
      status       = "successful"
    }

    "23" = {
      account_type = "credit"
      amount       = 39.99
      date         = "2023-11-30"
      merchant     = "StationeryStore"
      status       = "successful"
    }

    "24" = {
      account_type = "checking"
      amount       = 99.25
      date         = "2023-09-10"
      merchant     = "Bakery"
      status       = "pending"
    }

    "25" = {
      account_type = "credit"
      amount       = 199.99
      date         = "2023-12-15"
      merchant     = "GardenCenter"
      status       = "successful"
    }
    "26" = {
      account_type = "checking"
      amount       = 149.50
      date         = "2023-10-01"
      merchant     = "HomeGoodsStore"
      status       = "pending"
    }

    "27" = {
      account_type = "credit"
      amount       = 199.25
      date         = "2023-11-05"
      merchant     = "ElectricalStore"
      status       = "successful"
    }

    "28" = {
      account_type = "credit"
      amount       = 79.99
      date         = "2023-12-10"
      merchant     = "GiftStore"
      status       = "successful"
    }

    "29" = {
      account_type = "checking"
      amount       = 99.75
      date         = "2023-09-20"
      merchant     = "ShoeStore"
      status       = "pending"
    }

    "30" = {
      account_type = "checking"
      amount       = 159.99
      date         = "2023-11-30"
      merchant     = "WatchStore"
      status       = "successful"
    }

    "31" = {
      account_type = "checking"
      amount       = 45.00
      date         = "2023-10-25"
      merchant     = "IceCreamShop"
      status       = "pending"
    }

    "32" = {
      account_type = "checking"
      amount       = 129.99
      date         = "2023-12-20"
      merchant     = "ArtSupplyStore"
      status       = "successful"
    }

    "33" = {
      account_type = "checking"
      amount       = 29.99
      date         = "2023-11-15"
      merchant     = "StationeryShop"
      status       = "successful"
    }

    "34" = {
      account_type = "checking"
      amount       = 79.25
      date         = "2023-09-30"
      merchant     = "PizzaPlace"
      status       = "pending"
    }

    "35" = {
      account_type = "checking"
      amount       = 179.99
      date         = "2023-12-25"
      merchant     = "GadgetStore"
      status       = "successful"
    }

    "36" = {
      account_type = "checking"
      amount       = 99.50
      date         = "2023-10-10"
      merchant     = "FlowerShop"
      status       = "pending"
    }

    "37" = {
      account_type = "checking"
      amount       = 249.99
      date         = "2023-11-05"
      merchant     = "ComputerStore"
      status       = "successful"
    }

    "38" = {
      account_type = "checking"
      amount       = 69.99
      date         = "2023-12-15"
      merchant     = "CandyStore"
      status       = "successful"
    }

    "39" = {
      account_type = "checking"
      amount       = 69.75
      date         = "2023-09-20"
      merchant     = "DonutShop"
      status       = "pending"
    }

    "40" = {
      account_type = "checking"
      amount       = 139.99
      date         = "2023-11-30"
      merchant     = "LiquorStore"
      status       = "successful"
    }
  }

  item = <<ITEM
    {
        "id": {"S": "${each.key}"},
        "account_type": {"S": "${each.value.account_type}"},
        "amount": {"N": "${each.value.amount}"},
        "date": {"S": "${each.value.date}"},
        "merchant": {"S": "${each.value.merchant}"},
        "status": {"S": "${each.value.status}"}
    }
    ITEM
}
