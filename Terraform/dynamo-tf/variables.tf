variable "aws_access_key" {
  type = string
  description = "aws access key"
  default = ""
  sensitive = true
}

variable "aws_secret_key" {
  type = string
  description = "aws secret key"
  default = ""
  sensitive = true
}

variable "aws_dynamo_table" {
  type = string
  description = "dynamo table"
  default = "talkin-ship-release-demo"
  sensitive = true
}

variable "aws_dynamo_hash_key" {
  type = string
  description = "dynamo table"
  default = "id"
  sensitive = true
  
}