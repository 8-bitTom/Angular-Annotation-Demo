'use strict';

angular.module( 'aadApp' )
	.controller( 'MainCtrl', function ( $scope, $http, $modal ) {
		$http.get( '/api/samples' ).success( function ( samples ) {
			$scope.samples = samples;
			$scope.sampleHash = [];
			for(var i = 0; i < samples.length; i++){
				$scope.sampleHash.push(samples[i]._id);
			}
		} );

		$scope.groupName ="";

		$scope.group = ["-"];

		$scope.states = {
			expander:  true,
			filter:    'accession',
			filterRev: false,
			selected:  [],
			columns:   {
				accession: {
					view:  true,
					title: 'Accession'
				},
				title:     {
					view:  true,
					title: 'Title'
				},
				source:    {
					view:  true,
					title: 'Source Name'
				},
				info:      {
					view:  false,
					title: 'Charachteristics'
				}
			},
			dropdown : false
		};

		$scope.sort = function ( name ) {
			if ( $scope.states.filter === name ) {
				$scope.states.filterRev = !$scope.states.filterRev;
			} else {
				$scope.states.filter = name;
				$scope.states.filterRev = false;
			}
		}

		$scope.sortClass = function ( name ) {
			var out = 'glyphicon-sort';
			if ( name === $scope.states.filter ) {
				if ( $scope.states.filterRev ) {
					out = 'glyphicon-sort-by-attributes-alt';
				} else {
					out = 'glyphicon-sort-by-attributes';
				}
			}
			return out;
		}

		$scope.select = function ( int ) {
			if ( $scope.states.selected.indexOf( int ) > -1 ) {
				//remove it from the array
				var theIndex = $scope.states.selected.indexOf( int );
				$scope.states.selected.splice( theIndex, 1 );
			} else {
				$scope.states.selected.push( int );
			}
		}

		$scope.checkSubmit = function(e){
			if( e.keyCode === 13){
				$scope.group.push($scope.groupName);
				$scope.groupName = "";
			}
		}

		$scope.addToGroup = function(id){
			for(var i =0; i < $scope.states.selected.length; i++){
				$scope.samples[ $scope.sampleHash.indexOf( $scope.states.selected[i] ) ].group = id;
			}
			$scope.states.selected = [];
		}

		$scope.destroyGroup = function(id){
			for(var i = 0; i < $scope.samples.length; i++){
				if($scope.samples[i].group === id){
					$scope.samples[i].group = 0;
				}else if ($scope.samples[i].group > id){
					$scope.samples[i].group = $scope.samples[i].group -1;
				}
			}

			$scope.group.splice(id, 1);
		}

		$scope.openWindow = function (size) {
			var modalInstance = $modal.open({
				templateUrl: 'partials/modal.html',
				controller: 'ModalInstanceCtrl',
				scope: $scope,
				backdrop: false
			});
		};
	} );
