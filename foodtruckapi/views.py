from django.shortcuts import render

from django.http import HttpResponse
from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt

from geopy.distance import great_circle

import sys
import json


class Apis():


	def __init__(self):

		dataFile="F:/FoodTruck/data/Mobile_Food_Facility_Permit.json"
		# Transform json input to python objects
		with open(dataFile,"r") as input_file:
			self.truck_data = json.load(input_file)
		

	def processRequest(self,request):

		# convert to json
		#convert bytes to string, decode assuming utf-8 format
		reqStr = request.body.decode('utf-8')
		reqStrArr = reqStr.split()
		reqStr = ' '.join(reqStrArr)
		requestBody = json.loads(reqStr)
		print(requestBody)
		return requestBody


	@csrf_exempt
	def getTrucks(self,request):

		# get the request
		print("request")
		print(request.body)
		
		requestBody = self.processRequest(request)
		location_coords = requestBody['location']
	

		trucksNearby=[]
		for truck in self.truck_data:
			truck_coords=(float(truck['Latitude']),float(truck['Longitude']))
			distance = great_circle(location_coords,truck_coords).miles
			if distance < 1:
				trucksNearby.append(truck)
		
		print(len(trucksNearby))
		final_response = trucksNearby[:10]

		return JsonResponse(final_response,safe=False)


	






